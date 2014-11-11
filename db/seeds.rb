# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def ohsix
  %w(eric tan gu gustavo emily corey marc will allie hilary alan chad andy tim jonmichael horacio )
end

ohsix.each do |name|
  Student.create(name: name, picture: "#{name}.url")
  puts "Creating the student #{name}"
end
