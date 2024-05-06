class Api::V1::MessagesController < ApplicationController
  def show
    message = Message.find(params[:id])
    
    record_message = {
      data: {
        type: 'message',
        id: nil,
        attributes: {
          body: message
        }
      }
    }
    
    render json: record_message
  end

  def index
    messages = Message.all

    json_messages = {
      data: {
        type: 'messages',
        id: nil,
        attributes: {
          body: messages
        }
      }
    }

    render json: json_messages
  end
end
