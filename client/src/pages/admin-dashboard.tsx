import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { LogOut, Save, Globe } from "lucide-react";

interface AdminUser {
  id: number;
  email: string;
  role: string;
}

interface EditableContent {
  id: number;
  contentKey: string;
  contentValue: string;
  contentType: string;
  section: string;
  updatedAt: string;
}

interface ContentTranslation {
  id: number;
  contentId: number;
  language: string;
  translatedValue: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [content, setContent] = useState<EditableContent[]>([]);
  const [translations, setTranslations] = useState<Record<number, ContentTranslation[]>>({});
  const [editingContent, setEditingContent] = useState<Record<number, string>>({});
  const [editingTranslations, setEditingTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'zh', name: 'Chinese' },
    { code: 'pl', name: 'Polish' },
    { code: 'ar', name: 'Arabic' }
  ];

  useEffect(() => {
    checkAuth();
    loadContent();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/me");
      if (!response.ok) throw new Error('Auth failed');
      const adminData = await response.json();
      setAdmin(adminData);
    } catch (error) {
      console.error("Auth check failed:", error);
      setLocation("/admin/login");
    }
  };

  const loadContent = async () => {
    try {
      const response = await fetch("/api/admin/content");
      if (!response.ok) throw new Error('Failed to load content');
      const contentData = await response.json();
      setContent(contentData);
      
      // Initialize editing state
      const editingState: Record<number, string> = {};
      contentData.forEach((item: EditableContent) => {
        editingState[item.id] = item.contentValue;
      });
      setEditingContent(editingState);

      // Load translations for each content item
      const translationsData: Record<number, ContentTranslation[]> = {};
      for (const item of contentData) {
        try {
          const translationsResponse = await fetch(`/api/admin/content/${item.id}/translations`);
          if (translationsResponse.ok) {
            const itemTranslations = await translationsResponse.json();
            translationsData[item.id] = itemTranslations;
          } else {
            translationsData[item.id] = [];
          }
        } catch (error) {
          console.error(`Failed to load translations for content ${item.id}:`, error);
          translationsData[item.id] = [];
        }
      }
      setTranslations(translationsData);

      // Initialize translation editing state
      const translationEditingState: Record<string, string> = {};
      Object.entries(translationsData).forEach(([contentId, contentTranslations]) => {
        contentTranslations.forEach(translation => {
          const key = `${contentId}-${translation.language}`;
          translationEditingState[key] = translation.translatedValue;
        });
      });
      setEditingTranslations(translationEditingState);

    } catch (error) {
      console.error("Failed to load content:", error);
      toast({
        title: "Error",
        description: "Failed to load content",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setLocation("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleContentUpdate = async (contentId: number) => {
    try {
      const newValue = editingContent[contentId];
      const response = await fetch(`/api/admin/content/${contentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentValue: newValue }),
      });
      
      if (!response.ok) throw new Error('Failed to update content');

      // Update local state
      setContent(prev => prev.map(item => 
        item.id === contentId 
          ? { ...item, contentValue: newValue, updatedAt: new Date().toISOString() }
          : item
      ));

      toast({
        title: "Content updated",
        description: "Your changes have been saved successfully",
      });
    } catch (error) {
      console.error("Failed to update content:", error);
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    }
  };

  const handleTranslationUpdate = async (contentId: number, language: string) => {
    try {
      const key = `${contentId}-${language}`;
      const newValue = editingTranslations[key];
      
      const response = await fetch(`/api/admin/content/${contentId}/translations/${language}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ translatedValue: newValue }),
      });
      
      if (!response.ok) throw new Error('Failed to update translation');

      // Update local state
      setTranslations(prev => ({
        ...prev,
        [contentId]: prev[contentId]?.map(translation =>
          translation.language === language
            ? { ...translation, translatedValue: newValue, updatedAt: new Date().toISOString() }
            : translation
        ) || []
      }));

      toast({
        title: "Translation updated",
        description: `${language.toUpperCase()} translation saved successfully`,
      });
    } catch (error) {
      console.error("Failed to update translation:", error);
      toast({
        title: "Error",
        description: "Failed to update translation",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  const contentBySection = content.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, EditableContent[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Content Management System</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">{admin?.email}</Badge>
              <Badge variant={admin?.role === 'owner' ? 'default' : 'secondary'}>
                {admin?.role}
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="content" className="space-y-4">
          <TabsList>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="translations">Translations</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            {Object.entries(contentBySection).map(([section, items]) => (
              <Card key={section}>
                <CardHeader>
                  <CardTitle className="capitalize">{section} Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="space-y-2 p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <Label className="text-sm font-medium">{item.contentKey}</Label>
                          <Badge variant="outline" className="ml-2">{item.contentType}</Badge>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleContentUpdate(item.id)}
                          disabled={editingContent[item.id] === item.contentValue}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>
                      {item.contentType === 'text' ? (
                        <Textarea
                          value={editingContent[item.id] || ''}
                          onChange={(e) => setEditingContent(prev => ({
                            ...prev,
                            [item.id]: e.target.value
                          }))}
                          rows={3}
                        />
                      ) : (
                        <Input
                          value={editingContent[item.id] || ''}
                          onChange={(e) => setEditingContent(prev => ({
                            ...prev,
                            [item.id]: e.target.value
                          }))}
                        />
                      )}
                      <p className="text-xs text-gray-500">
                        Last updated: {new Date(item.updatedAt).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="translations" className="space-y-6">
            {content.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    {item.contentKey}
                  </CardTitle>
                  <p className="text-sm text-gray-600">Original: {item.contentValue}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {languages.filter(lang => lang.code !== 'en').map((language) => {
                    const translation = translations[item.id]?.find(t => t.language === language.code);
                    const key = `${item.id}-${language.code}`;
                    
                    return (
                      <div key={language.code} className="space-y-2 p-4 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <Label className="font-medium">{language.name}</Label>
                          <Button
                            size="sm"
                            onClick={() => handleTranslationUpdate(item.id, language.code)}
                            disabled={!editingTranslations[key] || editingTranslations[key] === translation?.translatedValue}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save {language.code.toUpperCase()}
                          </Button>
                        </div>
                        {item.contentType === 'text' ? (
                          <Textarea
                            value={editingTranslations[key] || translation?.translatedValue || ''}
                            onChange={(e) => setEditingTranslations(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }))}
                            placeholder={`Enter ${language.name} translation...`}
                            rows={3}
                          />
                        ) : (
                          <Input
                            value={editingTranslations[key] || translation?.translatedValue || ''}
                            onChange={(e) => setEditingTranslations(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }))}
                            placeholder={`Enter ${language.name} translation...`}
                          />
                        )}
                        {translation && (
                          <p className="text-xs text-gray-500">
                            Last updated: {new Date(translation.updatedAt).toLocaleString()}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}