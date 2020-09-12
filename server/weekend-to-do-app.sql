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