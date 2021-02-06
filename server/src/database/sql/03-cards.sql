create table cards(
	id bigserial,
	front text not null,
	verse text not null,
	deckId bigint not null,
	date_create timestamp default current_timestamp,
	date_update timestamp default current_timestamp,
	constraint cards_pk primary key (id),
	constraint cards_deckId_fk foreign key (deckId) references decks(id)
);