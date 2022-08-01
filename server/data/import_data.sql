BEGIN;
INSERT INTO "user" ("id", "email", "first_name", "last_name", "password") VALUES
(1, 'fab.callot@gmail.com', 'Fab', 'Call', 'fab12345');

INSERT INTO "tag" ("id", "name", "color") VALUES 
(1, 'urgent', '#C340A1'),
(2, 'current', '#00B294'),
(3, 'bug', '#DA3A3A'),
(4, 'process', '#3F88E4');

INSERT INTO "list" ("id", "name", "user_id") VALUES
(1, 'Backlog', 1),
(2, 'In progress', 1),
(3, 'Done', 1);

INSERT INTO "card" ("id", "description", "list_id", "color") VALUES
(1, 'Chose à faire', 1, '#6b7280'),
(2, 'Autre chose à faire', 1, '#6b7280'),
(3, 'Chose en cours', 2, '#6b7280'),
(4, 'Chose terminée', 3, '#6b7280');

INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
(1,1),
(1,2),
(2,2),
(3,1),
(3,2),
(4,2);

SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));
SELECT setval('tag_id_seq', (SELECT MAX(id) from "tag"));
SELECT setval('list_id_seq', (SELECT MAX(id) from "list"));
SELECT setval('card_id_seq', (SELECT MAX(id) from "card"));
SELECT setval('card_has_tag_id_seq', (SELECT MAX(id) from "card_has_tag"));

COMMIT;