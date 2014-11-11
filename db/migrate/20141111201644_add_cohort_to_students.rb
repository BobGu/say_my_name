class AddCohortToStudents < ActiveRecord::Migration
  def change
    add_column :students, :cohort, :string
  end
end
