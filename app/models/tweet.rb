class Tweet < ActiveRecord::Base
  belongs_to :user

  def as_json(_options = {})
    super(methods: [:name])
  end

  def name
    user.display_name
  end
end
