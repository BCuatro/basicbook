@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user.json.jbuilder", user: user
       
        if @user.profile_photo.attached?
            json.profile_photoUrl url_for(user.profile_photo)
        end
    end
end