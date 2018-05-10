class FollowersController < ApplicationController

  def random
    data = [
      'users' => User.who_to_follow(current_user.id),
      'followers' => who_i_follow
    ]
    render json: data
  end

  def who_i_follow
    followers = Follower.where(followed_by: current_user.id)
    followers.map(&:user_id)
  end

  def following?
    Follower.find_by(user_id: params[:user_id],
                     followed_by: current_user.id) == nil?
  end

  def follow
    return unfollow if following?
    follower = Follower.create(user_id: params[:user_id],
                               followed_by: current_user.id)
    render json: follower
  end

  def unfollow
    # return follow unless following?
    follower = Follower.find_by(user_id: params[:user_id],
                                followed_by: current_user.id)
    follower.delete
    render json: follower
  end
end
