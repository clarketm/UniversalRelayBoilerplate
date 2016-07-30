DROP KEYSPACE IF EXISTS urb;

CREATE KEYSPACE urb
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE urb;





// Since winston-cassandra would not create schema due to issue with Cassandra Node.js driver, apparently, this:
CREATE TABLE logs(
  key text,
  date timestamp,
  level text,
  message text,
  meta text,
  PRIMARY KEY(key, date)
);
// Does not seem to resolve the problem anyway, but let's keep it here for now.




CREATE TABLE "User"(
  id uuid PRIMARY KEY,
  "User_AccountName" varchar,
  "User_AccountPassword" varchar,
  "User_DisplayName" varchar,
  "User_ProfilePhoto" varchar,
  "User_Email" varchar,
  "User_PhoneNumberMobile" varchar,
  "User_Locale" varchar,
  "UserToken2" varchar
);

CREATE INDEX "User_User_AccountName_ix"
ON "User"( "User_AccountName" );
