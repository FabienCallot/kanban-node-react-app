BEGIN;

DROP TABLE IF EXISTS "user", "list", "card", "tag", "card_has_tag";

CREATE TABLE "user" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "list" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "position" integer NOT NULL DEFAULT 0,
    "user_id" int NOT NULL DEFAULT 1 REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "card" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "description" text NOT NULL,
    "position" integer NOT NULL DEFAULT 0,
    "color" text,
    "list_id" int NOT NULL REFERENCES "list"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "tag" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL UNIQUE,
    "color" text NOT NULL DEFAULT '#ffffff',
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "card_has_tag" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "card_id" int NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
    "tag_id" int NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

COMMIT;