@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user.json.jbuilder", user: user
       
        # if @user.profile_photo.attached?
        #     json.profile_photoUrl url_for(user.profile_photo)
        # end

        # if @user.cover_photo.attached?
        #     json.cover_photoUrl url_for(user.cover_photo)
        # end
    end
end