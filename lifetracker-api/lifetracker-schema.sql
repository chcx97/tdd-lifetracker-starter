CREATE TABLE users (
    id             SERIAL PRIMARY KEY,
    username       TEXT NOT NULL,
    password       TEXT NOT NULL,
    first_name     TEXT NOT NULL,
    last_name      TEXT NOT NULL,
    email          TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
    created_at     TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    category    TEXT NOT NULL,
    calories    INTEGER NOT NULL,
    quantity    INTEGER NOT NULL DEFAULT 1,
    image_url   TEXT NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id     INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);