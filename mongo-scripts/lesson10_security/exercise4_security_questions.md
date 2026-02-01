# Exercise 4 — Security Questions

## 1. Ποια παράμετρος στο mongod.conf περιορίζει την πρόσβαση με βάση IP;
Η παράμετρος:
net:
bindIp: <allowed IPs>


## 2. Τι ρόλο έχει ο χρήστης readOnlyUser;
Ο χρήστης με ρόλο **read**:
- Μπορεί να διαβάζει δεδομένα.
- Δεν μπορεί να εισάγει, ενημερώσει ή διαγράψει έγγραφα.
- Είναι ιδανικός για αναλυτές, auditors ή εφαρμογές που χρειάζονται μόνο προβολή.

## 3. Πώς ενεργοποιείτε την πιστοποίηση στη MongoDB;
Στο αρχείο mongod.conf:
security:
authorization: enabled

Έπειτα restart:
sudo systemctl restart mongod
