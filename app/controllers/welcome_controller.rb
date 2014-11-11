class WelcomeController < ApplicationController
  def index
    @shuffled_students = Student.all.shuffle
  end
end
