class AddColumn < ActiveRecord::Migration
  def self.up
 	create_table "entries" do |t|
    	t.column "value", :text
    end
  end

  def self.down
  		drop_table "entries"
  end
end
