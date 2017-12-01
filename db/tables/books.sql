create table books(
id serial primary key,
title text,
author text,
img text,
instock boolean,
description text,
shelfid int references users(id)
)