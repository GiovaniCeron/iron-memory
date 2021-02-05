create table users(
	id bigserial,
	name text,
	email text,
	password text,
	date_create timestamp default current_timestamp,
	date_update timestamp default current_timestamp,
	constraint users_pk primary key (id),
	constraint users_email_uk unique (email)
);