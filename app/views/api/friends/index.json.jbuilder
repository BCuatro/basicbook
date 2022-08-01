@friends.each do |friend|
    json.set! friend.id do
        json.partial! "api/friends/friend.json.jbuilder", friend: friend
       
    end
end