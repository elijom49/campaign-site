{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from "react";\
\
const AdminLogin = () => \{\
  const [password, setPassword] = useState("");\
  const [error, setError] = useState("");\
\
  const handleSubmit = (e: React.FormEvent) => \{\
    e.preventDefault();\
    // Replace 'admin123' with your actual admin password or better auth logic\
    if (password === "admin123") \{\
      window.location.href = "/admin/dashboard";\
    \} else \{\
      setError("Invalid password");\
    \}\
  \};\
\
  return (\
    <div style=\{\{ maxWidth: 400, margin: "auto", padding: "2rem" \}\}>\
      <h2>Admin Login</h2>\
      <form onSubmit=\{handleSubmit\}>\
        <input\
          type="password"\
          placeholder="Enter admin password"\
          value=\{password\}\
          onChange=\{(e) => setPassword(e.target.value)\}\
          style=\{\{ width: "100%", padding: "0.5rem", marginBottom: "1rem" \}\}\
        />\
        <button type="submit" style=\{\{ padding: "0.5rem 1rem" \}\}>\
          Login\
        </button>\
      </form>\
      \{error && <p style=\{\{ color: "red" \}\}>\{error\}</p>\}\
    </div>\
  );\
\};\
\
export default AdminLogin;\
}