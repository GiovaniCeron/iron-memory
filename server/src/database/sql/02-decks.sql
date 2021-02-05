create table decks(
	id bigserial,
	name text,
	description text,
	iduser bigint,
	date_create timestamp default current_timestamp,
	date_update timestamp default current_timestamp,
	constraint decks_pk primary key (id),
	constraint decks_iduser_fk foreign key (iduser) references users(id)
);