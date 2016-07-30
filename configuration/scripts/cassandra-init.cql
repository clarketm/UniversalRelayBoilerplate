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





CREATE TABLE "Compendium"(
  "id" uuid PRIMARY KEY,
  "Compendium_User_id" uuid,
  "Compendium_FirstTextInput" varchar,
  "Compendium_RangedNumber" int,
  "Compendium_Excitement" int,
  "Compendium_FollowUpQuestion" varchar,
  "Compendium_FavoriteMammal" int,
  "Compendium_FavoriteMammalOtherText" varchar,
  "Compendium_LastText" varchar,
  "Compendium_LikedSunset_Ocean" boolean,
  "Compendium_LikedSunset_Lake" boolean,
  "Compendium_LikedSunset_Mountains" boolean,
  "Compendium_LikedSunset_Plains" boolean,
  "Compendium_LikedSunset_Purple" boolean,
  "Compendium_LikedSunset_Green" boolean,
  "Compendium_LikedSunset_Other" boolean,
  "Compendium_LikedSunset_OtherText" varchar,
);

CREATE INDEX "Compendium_Compendium_User_id_ix"
ON "Compendium"( "Compendium_User_id" );










CREATE TABLE "ToDo"(
  "id" uuid PRIMARY KEY,
  "ToDo_User_id" uuid,
  "ToDo_Text" varchar,
  "ToDo_Complete" boolean,
);

CREATE INDEX "ToDo_ToDo_User_id_ix"
ON "ToDo"( "ToDo_User_id" );





CREATE TABLE "Translaticiarum"(
  id uuid PRIMARY KEY,
  "Translaticiarum_User_id" uuid,
  "Translaticiarum_Date" timestamp,
  "Translaticiarum_Time" timestamp,
  "Translaticiarum_Type" int,
);

CREATE INDEX "Translaticiarum_Translaticiarum_User_id_ix"
ON "Translaticiarum"( "Translaticiarum_User_id" );
