# Exercise 16 — Data Types Identification

Given the document:

{
  "name": "Γιάννης Παπαδόπουλος",
  "age": 35,
  "isActive": true,
  "skills": ["JavaScript", "Node.js"],
  "address": {
    "city": "Αθήνα",
    "zip": "11521"
  },
  "profilePicture": BinData(0, "base64encodeddata"),
  "hiredAt": ISODate("2023-01-15T08:00:00Z")
}

## Data Types

- name → **String**
- age → **Int32 / Number**
- isActive → **Boolean**
- skills → **Array**
- address → **Object / Embedded Document**
- profilePicture → **Binary Data**
- hiredAt → **Date (ISODate)**
