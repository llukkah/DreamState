class CreateInterprets < ActiveRecord::Migration[6.0]
  def change
    create_table :interprets do |t|
      t.string :name
      t.string :image_url
      t.string :website_url
      t.text :description
      t.string :tag

      t.timestamps
    end
  end
end
