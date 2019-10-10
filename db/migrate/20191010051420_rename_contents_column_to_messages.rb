class RenameContentsColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :contents, :content
  end
end
