from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# use phantomJS here for invisible browser
#driver = webdriver.PhantomJS()
#or plain old firefox
driver = webdriver.Firefox()

driver.get("http://www.cleverbot.com")

def send_message():

    # prompt user for text
    message = raw_input('Enter a message:')

    # set value of text box
    driver.find_element_by_class_name('stimulus').send_keys(message)

    # hit send
    driver.find_element_by_class_name('sayitbutton').click()

    # get cleverbot output
    time.sleep(5) # takes a moment for text to appear on screen...which sucks
    sentences = driver.find_elements_by_xpath('.//span[@class = "bot"]')
    print sentences[len(sentences) - 1].text

    send_message()



send_message()