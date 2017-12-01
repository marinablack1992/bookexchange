delete from cart where userid = $1 and bookid=$2;

select users.*, cart.*, books.* from users
join cart on cart.userid = users.id
join books on books.id = cart.bookid
where users.id = $1;