create table decks(
	id bigserial,
	name text,
	description text,
	userId bigint,
	date_create timestamp default current_timestamp,
	date_update timestamp default current_timestamp,
	constraint decks_pk primary key (id),
	constraint decks_userId_fk foreign key (userId) references users(id)
);