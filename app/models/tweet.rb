class Tweet < ActiveRecord::Base
  belongs_to :user

  def as_json(_options = {})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_name
  end

  def gravatar
    user.gravatar
  end
end
