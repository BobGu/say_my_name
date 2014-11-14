require 'csv'

CSV.foreach('/Users/robertgu/turing/say_my_name/app/assets/images/turing_students.csv') do |row|
  if row[0] != nil
    Student.create(name: row[0], cohort: row[1])
  end
end
