db.createUser(
    {
      user: "admin",
      pwd: "z59vAkocegX5U9",
      roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
    }
)