import time
import hashlib

class Block:
    def __init__(self, index, data, previous_hash=''):
        self.index = index
        self.data = data
        self.timestamp = time.time()
        self.previous_hash = previous_hash
        self.hash_value = self.calculate_hash()

    def calculate_hash(self):
        block_string = f"{self.index}{self.data}{self.timestamp}{self.previous_hash}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def __str__(self):
        formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(self.timestamp))
        return (f"Index: {self.index}\n"
                f"Data: {self.data}\n"
                f"Timestamp: {formatted_time}\n"
                f"Previous Hash: {self.previous_hash}\n"
                f"Hash: {self.hash_value}")

def create_genesis_block():
    return Block(0, "Genesis Block", "0")

def create_next_block(previous_block, data):
    return Block(previous_block.index + 1, data, previous_block.hash_value)

genesis_block = create_genesis_block()
second_block = create_next_block(genesis_block, "Second Block Data")
third_block = create_next_block(second_block, "Third Block Data")

print(genesis_block)
print("------------------------------------------------------------")
print(second_block)
print("------------------------------------------------------------")
print(third_block)
