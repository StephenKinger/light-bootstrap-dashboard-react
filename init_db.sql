CREATE DATABASE dbdashboard;
\c dbdashboard;
CREATE TABLE IF NOT EXISTS team_members(
    member_id INT GENERATED ALWAYS AS IDENTITY,
    member_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(member_id)
);

CREATE TABLE IF NOT EXISTS delivery(
    delivery_id INT GENERATED ALWAYS AS IDENTITY,
    delivery_member_id INT,
    checker_member_id INT,
    week_MER VARCHAR(15),
    week_MEP VARCHAR(15),
    description VARCHAR(1024),
    jira_links VARCHAR(255)[],
    CONSTRAINT fk_delivery_member_id
        FOREIGN KEY(delivery_member_id)
            REFERENCES team_members(member_id),
    CONSTRAINT fk_checker_member_id
        FOREIGN KEY(checker_member_id)
            REFERENCES team_members(member_id)
);

