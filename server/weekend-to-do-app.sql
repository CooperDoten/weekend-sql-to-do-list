CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,  -- incantation for IDs
	"name" VARCHAR(100) NOT NULL,
	"age" INTEGER NOT NULL,
	"task" VARCHAR (256) NOT NULL,
	"type" VARCHAR(100),
	"complete" VARCHAR(10)
);

                     
INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Cooper', 34, 'fold the laundry', 'Chore', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Fiona', 52, 'fetch the bolt cutters', 'Chore', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Ajay', 34, 'troll tarjan', 'Other', 'Yes');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('dEv', 38, 'walk the dog', 'Physical Activity', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Hunter', 4, 'pick up legos', 'Chore', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Forest', 1, 'take a nap', 'Relaxation', 'Yes');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Mark', 29, 'Read a book', 'Other', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Sara', 49, 'write a song', 'Other', 'Yes');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Ben', 31, 'edit vocal comps', 'Other', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Brett', 33, 'go for a run', 'Physical Activity', 'No');
    INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ('Kris', 54, 'have dinner', 'Eating', 'Yes');