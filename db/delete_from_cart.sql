delete from cart where id = $1 and bookid=$2;
returning *;