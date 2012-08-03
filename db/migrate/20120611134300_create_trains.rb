class CreateTrains < ActiveRecord::Migration
  def self.up
    create_table :trains do |t|
    	t.string :train_name
    	t.string :train_from
    	t.string :train_to
    	t.integer :train_dist
      t.timestamps   
    end
  end

  def self.down
    drop_table :trains    
  end
end
