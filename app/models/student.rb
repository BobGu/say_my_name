class Student < ActiveRecord::Base
  def self.ohsix
    Student.where(cohort: '1406')
  end

  def self.ohnine
    Student.where(cohort: '1409')
  end

  def self.ten
    Student.where(cohort: '1410')
  end
end
