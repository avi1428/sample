class AddtrainnumtoTrains < ActiveRecord::Migration
  def self.up
  	add_column :trains, :train_num, :integer
  end

  def self.down
  	remove_column :trains , :train_num
  end
end
