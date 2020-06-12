class CreateDreams < ActiveRecord::Migration[6.0]
  def change
    create_table :dreams do |t|
      t.string :location
      t.integer :year
      t.text :story

      t.timestamps
    end
  end
end
