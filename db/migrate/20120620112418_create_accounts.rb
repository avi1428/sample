class CreateAccounts < ActiveRecord::Migration
  def self.up
    create_table :accounts do |t|
    	t.string :user_name
    	t.string :user_email
    	t.string :user_password
    	t.integer :mobile
      t.timestamps
    end
  end

  def self.down
    drop_table :accounts
  end
end
