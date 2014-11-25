class WelcomeController < ApplicationController
  def index
    @ohsix = Student.ohsix.shuffle
    @ohseven = Student.ohseven.shuffle
    @ohnine = Student.ohnine.shuffle
    @ten = Student.ten.shuffle
  end
end
