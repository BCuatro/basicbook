@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :author_id, :profile_id,:created_at, :updated_at
        

        if post.post_photo.attached?
            json.post_photoUrl url_for(post.post_photo)
        
        end
    end
end



