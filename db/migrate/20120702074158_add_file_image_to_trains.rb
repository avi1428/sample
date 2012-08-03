class AddFileImageToTrains < ActiveRecord::Migration
  def self.up
  	add_column :trains, :train_img,    :string
  end

  def self.down
  	remove_column :trains, :train_img,  :string
  end
end
