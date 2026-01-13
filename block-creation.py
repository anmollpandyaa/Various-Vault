import time
import hashlib

class Block:
        
    def calculate_hash(self):
        block_string = f"{self.index}{self.data}{self.timestamp}"
        return hashlib.sha256(block_string.encode()).hexdigest()
        
    def __init__(self, data, index):
        self.data = data
        self.index = index
        self.timestamp = time.time()
        self.hshvalue = self.calculate_hash()
        
    def __str__(self):
        formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(self.timestamp))
        return f"Index: {self.index}\nData: {self.data}\nTimestamp: {formatted_time}\nHash: {self.hshvalue}"

    
block = Block(10, 1)
print(block)
