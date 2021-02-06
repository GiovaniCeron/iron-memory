create table learning(
	id bigserial,
	cardId bigint not null,
	date_learn date not null,
	hit boolean default false not null,
	incorret boolean default false not null,
	date_learning date,
	learn boolean default false not null,
	constraint learning_pk primary key (id),
	constraint learning_cardId_fk foreign key (cardId) references cards(id)
);