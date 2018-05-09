class FixFollowersColumnName < ActiveRecord::Migration
  def change
    rename_column :followers, :followeb_by, :followed_by
  end
end
