insert into users (
    auth0_id,
    email,
    name,
    picture_url
)
values (
    $1, $2, $2, $4
);