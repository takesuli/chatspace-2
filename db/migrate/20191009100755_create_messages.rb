class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :contents
      t.string :image
      t.references :group, foreign_key: true
      t.references :users, foreign_key: true
      t.timestamps
    end
  end
end
