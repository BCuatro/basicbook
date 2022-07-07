
json.partial! "api/users/user.json.jbuilder", user: @user

if @user.profile_pic.attached?
    json.profile_pic_url url_for(@user.profile_pic)
end

if @user.cover_pic.attached?
    json.cover_pic_url url_for(@user.cover_pic)
end
