class AddFileImageToAccounts < ActiveRecord::Migration
  def self.up
  	add_column :trains, :user_img,    :string
  end

  def self.down
  	remove_column :trains, :user_img,  :string
  end
end
