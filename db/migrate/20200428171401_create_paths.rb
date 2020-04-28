class CreatePaths < ActiveRecord::Migration[6.0]
  def change
    create_table :paths do |t|
      t.string :titlee

      t.timestamps
    end
  end
end
