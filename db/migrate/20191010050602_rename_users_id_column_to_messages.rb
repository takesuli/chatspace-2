class RenameUsersIdColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :users_id, :user_id
  end
end
